import { Box, Button, Card, Divider, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ChangeEvent, useState } from "react";
import { Confederation, LeagueTemplate, Tournament } from "../types.tsx";
import DeleteIcon from '@mui/icons-material/Delete';
import TableChartIcon from '@mui/icons-material/TableChart';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import PageTemplate from "./PageTemplate.tsx";
import { useLeagueTemplates } from "../hooks/useLeagueTemplates.ts";

const steps = ["Tournament Details", "League Phase Set-up", "Knockout Phase Set-up", "Confirmation"]

const CreateTournament = () => {
    const { data: leagueTemplates = [], error, isLoading } = useLeagueTemplates();

    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState<{
        [k: number]: boolean
    }>({});
    const [completed, setCompleted] = useState<{
        [k: number]: boolean
    }>({});
    const [name, setName] = useState<string | null>();
    const [year, setYear] = useState<number | null>();
    const [confederation, setConfederation]= useState<Confederation | null>(null);
    const [format, setFormat] = useState<'league' | 'knockout' | 'both' | null>();
    const [hovered, setHovered] = useState<string | null>(null);
    const [tournament, setTournament] = useState<Tournament | null>(null);
    const [leagueTemplate, setLeagueTemplate] = useState<LeagueTemplate | null>(null);

    const buttons = [
        { 
            type: 'league', 
            description: 'A round-robin structure where each team plays every other team. Common in domestic leagues like the Premier League or La Liga. Best for consistent team performance.',
            label: 'League', 
            icon: <TableChartIcon fontSize="large" /> 
        },
        { 
            type: 'knockout', 
            description: 'A single-elimination format where losing means you\'re out. Perfect for tournaments with high stakes and fewer matches, like the FA Cup.',
            label: 'Knockout', 
            icon: <SportsMmaIcon fontSize="large" /> 
        },
        { 
            type: 'both', 
            description: 'Combines a group stage (round-robin) followed by a knockout stage. Widely used in international tournaments like the FIFA World Cup or UEFA Champions League.',
            label: 'League & Knockout', 
            icon: <JoinInnerIcon fontSize="large" /> 
        }
    ];

    const stepContent = [
        {
            title: "Tournament Details",
            description: "Enter the basic details for your tournament, including name, year, confederation, and format.",
        },
        {
            title: "League Phase Set-up",
            description: "Configure the group stage: number of teams, groups, match rules, etc.",
        },
        {
            title: "Knockout Phase Set-up",
            description: "Set up the knockout rounds, seeding logic, and tie-breakers.",
        },
        {
            title: "Confirmation",
            description: "Review all your inputs before finalizing the tournament creation.",
        }
    ];

    const totalSteps = (): number => {
        return steps.length;
    }

    const completedSteps = (): number => {
        return Object.keys(completed).length;
    }

    const skippedSteps = (): number => {
        return Object.keys(skipped).length;
    }

    const handleNext = () => {
        if ((activeStep === 0 && format === 'knockout') || (activeStep === 1 && format === 'league')) {
            handleSkip();
            setActiveStep(activeStep + 2);
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleSkip = () => {
        setSkipped({
            ...skipped,
            [activeStep + 1]: true
        });
    };

    const handleComplete = () => {
        console.log(`Before: ${activeStep}`);

        if (activeStep === 0) {
            const builtTournament: Tournament = {
                name: name ?? "",
                year: year ?? 0,
                confederation,
            };
            setTournament(builtTournament);
            console.log("Tournament created at step 1:", tournament);
            console.log(format);
        }

        setCompleted({
        ...completed,
        [activeStep]: true,
        });

        handleNext();
        console.log(`Completed: ${JSON.stringify(completed)}`);
        console.log(`Skipped: ${JSON.stringify(skipped)}`);
        console.log(`After: ${activeStep}`);
    };

    const handleSelect = (type: 'league' | 'knockout' | 'both') => {
        setFormat(type);
    };

    const handleConfederationChange = (event) => {
        setConfederation(Confederation[event.target.value as keyof typeof Confederation]);
    }

    const clearConfederation = () => {
        setConfederation(null)
    }

    const canAdvance = (): boolean => {
        if (activeStep === 0 && name !== undefined && year !== undefined && format !== undefined) {
            return true;
        }
        return false;
    }

    const handleLeagueTemplateChange = (event: SelectChangeEvent) => {
        const selected = leagueTemplates.find((template) => template.id === event.target.value) || null;
        console.log(JSON.stringify(selected));
        setLeagueTemplate(selected);
    }

    return (
        <PageTemplate title="Tournament Builder">
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                        <StepLabel sx={{fontFamily: 'var(--font-family)'}}>
                            <h4>{label}</h4>
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box display='flex' flexDirection='row' height='100%'>
                <Box width='50%' justifyContent='center' sx={{ borderRight: '1px solid rgba(0,0,0,0.12)' }}>
                    <Box sx={{ textAlign: 'center', maxWidth: 500, justifySelf: 'center', marginTop: 2, marginBottom: 1 }}>
                        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'var(--font-family)' }}>
                            {stepContent[activeStep].title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary"  sx={{ fontFamily: 'var(--font-family)', textAlign: 'left' }}>
                            {stepContent[activeStep].description}
                        </Typography>
                    </Box>
                    <div>
                        {activeStep === 0 && (
                            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500, mx: "auto" }}>
                                <TextField label="Name" variant="standard" required value={name} onChange={(e) => setName(e.target.value)}/>
                                <TextField label="Year" variant="standard" required value={year} onChange={(e) => setYear(parseInt(e.target.value, 10))}/>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <FormControl fullWidth variant="standard">
                                        <InputLabel id="confederation-label">Confederation</InputLabel>
                                        <Select
                                        labelId="confederation-label"
                                        value={confederation}
                                        onChange={handleConfederationChange}
                                        label="Confederation"
                                        displayEmpty
                                        variant="standard"
                                        >
                                        {Object.values(Confederation).map((conf) => (
                                            <MenuItem key={conf} value={conf}>
                                            {conf}
                                            </MenuItem>
                                        ))}
                                        </Select>
                                    </FormControl>
                                    <IconButton color="error" aria-label="delete" onClick={clearConfederation}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 3 }}>
                                    {buttons.map(({ type, label, icon }) => {
                                        const isHovered = hovered === type;
                                        const isSelected = format === type;
                                        const isDimmed = (hovered && !isHovered) || (format && !isSelected);

                                        return (
                                        <Box
                                            key={type}
                                            sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: 1,
                                            minWidth: 120,
                                            }}
                                        >
                                            <IconButton
                                            onClick={() => handleSelect(type as any)}
                                            onMouseEnter={() => setHovered(type)}
                                            onMouseLeave={() => setHovered(null)}
                                            sx={{
                                                borderRadius: '50%',
                                                transition: 'all 0.2s ease',
                                                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                                                backgroundColor: (theme) =>
                                                isSelected
                                                    ? theme.palette.primary.main
                                                    : isDimmed
                                                    ? theme.palette.grey[300]
                                                    : theme.palette.primary.light,
                                                color: 'white',
                                                boxShadow: isSelected ? 3 : 1,
                                                '&:hover': {
                                                backgroundColor: (theme) =>
                                                    isSelected ? theme.palette.primary.dark : theme.palette.primary.main,
                                                },
                                            }}
                                            >
                                            {icon}
                                            </IconButton>
                                            <Typography
                                            variant="caption"
                                            sx={{
                                                color: isSelected
                                                ? 'text.primary'
                                                : isDimmed
                                                ? 'grey.500'
                                                : 'grey.600',
                                                fontWeight: isSelected ? 'bold' : 'normal',
                                                textAlign: 'center',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                maxWidth: '100%',
                                                fontFamily: 'var(--font-family)'
                                            }}
                                            >
                                            {label}
                                            </Typography>
                                        </Box>
                                        );
                                    })}
                                    </Box>
                            </Box>
                        )}
                        {activeStep === 1 && (
                            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500, mx: "auto" }}>
                                <FormControl fullWidth>
                                    <InputLabel>League Template</InputLabel>
                                    <Select
                                        value={leagueTemplate?.id}
                                        label="League Template"
                                        onChange={handleLeagueTemplateChange}
                                        displayEmpty
                                        variant="standard"
                                    >
                                        {leagueTemplates.map((template) => (
                                            <MenuItem key={template.id} value={template.id}>
                                                {template.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        )}
                        {activeStep === 2 && (
                            <h1>Step 3 - Left</h1>
                        )}
                        {activeStep === 3 && (
                            <h1>Step 4 - Left</h1>
                        )}
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'center', marginTop: 2}}>
                        <Button
                            onClick={handleComplete}
                            variant="contained"
                            size="large"
                            disabled={!canAdvance()}
                            sx={{
                                px: 5,
                                py: 1.5,
                                borderRadius: '30px',
                                fontSize: '1.1rem',
                                textTransform: 'uppercase',
                                backgroundColor: (theme) => theme.palette.primary.main,
                                color: 'white',
                                boxShadow: 4,
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: (theme) => theme.palette.primary.dark,
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                                fontFamily: 'var(--font-family)'
                            }}
                        >
                            {completedSteps() + skippedSteps() === totalSteps() - 1 ? 'Create Tournament' : 'Next'}
                        </Button>
                    </Box>
                </Box>
                <Box width='50%' height='100%' textAlign='center'>
                    {activeStep === 0 && (
                        <Box display='flex' flexDirection='column' sx={{ textAlign: 'center', maxWidth: 500, justifySelf: 'center', marginTop: 5, height: '100%', gap: 8 }}>
                            {buttons.map(({ label, description, icon }) => {
                                
                                return (
                                    <Box display='flex' gap={3}>
                                        <Box
                                            sx={{
                                                borderRadius: '50%',
                                                backgroundColor: (theme) => theme.palette.primary.main,
                                                color: 'white',
                                                boxShadow: 3,
                                                height: 82,
                                                aspectRatio: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                            >
                                            {icon}
                                        </Box>
                                        <Box display='flex' flexDirection='column' textAlign='left'>
                                            <Typography variant="h5" fontFamily='var(--font-family)'>{label}</Typography>
                                            <Typography fontFamily='var(--font-family)' variant="body2" color="text.secondary">{description}</Typography>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>
                    )}
                    {activeStep === 1 && (
                        <>
                            {leagueTemplate !== null && (
                                <Grid sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500, mx: "auto" }}>
                                {Array.from({ length: leagueTemplate.groupCount }).map((_, groupI) => (
                                    <Grid size={{ xs: 12, sm: 6 }} key={groupI}>
                                        <Card
                                            variant="outlined"
                                            sx={{
                                            p: 2,
                                            minHeight: 120,
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            backgroundColor: '#f4f6f8',
                                            boxShadow: 1
                                            }}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                fontWeight="bold"
                                                gutterBottom
                                                sx={{ fontFamily: 'var(--font-family)' }}
                                            >
                                                Group {groupI + 1}
                                            </Typography>

                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                gutterBottom
                                                sx={{ fontFamily: 'var(--font-family)' }}
                                            >
                                                {leagueTemplate.teamsPerGroup} teams
                                            </Typography>

                                            <Box
                                                display="grid"
                                                gridTemplateColumns="repeat(2, 1fr)"
                                                gap={1}
                                                mt={1}
                                                width="60px" // ⬅️ adjust this as needed
                                            >
                                                {Array.from({ length: leagueTemplate.teamsPerGroup }).map((_, teamI) => (
                                                    <Box
                                                        key={teamI}
                                                        sx={{
                                                            width: 24,
                                                            height: 24,
                                                            borderRadius: '50%',
                                                            backgroundColor: 'primary.main',
                                                            color: 'white',
                                                            fontSize: 12,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        {teamI + 1}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            )}
                        </>
                    )}
                    {activeStep === 2 && (
                        <h1>Step 3 - Right</h1>
                    )}
                    {activeStep === 3 && (
                        <h1>Step 4 - Right</h1>
                    )}
                </Box>
            </Box>
        </PageTemplate>
    );
}

export default CreateTournament;