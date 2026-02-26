import {
    Card,
    Typography,
    Chip,
    Box,
    IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function ProjectCard({ project }) {
    return (
      <Card
        className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-xl"
        elevation={0}
        sx={{
          backgroundColor: "var(--color-surface-2)",
          border: "1px solid var(--color-surface-3)",
          padding: "1.2rem",
        }}
      >

        <Box display="flex" flexDirection="column" flexGrow={1} gap={1} className="mt-2">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">
                {project.title}
                </Typography>

                <Box>
                {project.github && (
                    <IconButton
                    size="small"
                    component="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-400!"
                    >
                    <GitHubIcon fontSize="small" />
                    </IconButton>
                )}

                {project.demo && (
                    <IconButton
                    size="small"
                    component="a"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-violet-400!"
                    >
                    <LaunchIcon fontSize="small" />
                    </IconButton>
                )}
                </Box>
            </Box>

            <Typography
                variant="body2"
                sx={{ color: "var(--color-text-secondary)" }}
            >
                {project.description}
            </Typography>

            <Box display="flex" flexWrap="wrap" gap={1}>
                {project.stack.map((tech, index) => (
                <Chip
                    key={index}
                    label={tech}
                    size="small"
                    variant="outlined"
                />
                ))}
            </Box>

            <Typography
                variant="caption"
                sx={{ color: "var(--color-text-secondary)" }}
            >
                {project.timeframe}
            </Typography>

        </Box>
      </Card>
    );
  }
