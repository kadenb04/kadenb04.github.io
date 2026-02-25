import Card from "./UI/Card";
import { CardContent, Typography, Chip } from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <Card className="group transition-all duration-300 rounded-2xl">
        <CardContent
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                gap: "1rem",
            }}
        >
            <Typography variant="h5" gutterBottom>
                {project.title}
            </Typography>

            <Typography variant="body2" className="mb-3">
                {project.description}
            </Typography>

            <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech, index) => (
                    <Chip key={index} label={tech} variant="outlined" />
                ))}
            </div>

            <Typography variant="caption"
                sx={{
                    color: "var(--color-text-secondary)",
                    marginTop: "0.5rem",
                }}
            >
                {project.timeframe}
            </Typography>
        </CardContent>
    </Card>
  );
}
