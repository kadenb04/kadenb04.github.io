import {
   Card,
   Typography,
   Chip,
   Box,
   Button,
   IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function ProjectCard({ project, flashSkill }) {
   return (
      <Card
         className="transition-all duration-300 rounded-xl"
         elevation={0}
         sx={{
            backgroundColor: "var(--color-surface-2)",
            border: "1px solid var(--color-surface-3)",
            padding: "1.5rem",
            height: "100%",
         }}
      >
         <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={3}
            height="100%"
         >
            {/* LEFT SIDE */}
            <Box
               display="flex"
               flexDirection="column"
               justifyContent="space-between"
               flexGrow={1}
            >
               {/* TOP CONTENT */}
               <Box>
                  <Typography variant="h6" gutterBottom>
                     {project.title}
                  </Typography>

                  <Typography
                     variant="body2"
                     sx={{ color: "var(--color-text-secondary)" }}
                  >
                     {project.description}
                  </Typography>
               </Box>

               {/* BOTTOM META (SNAPS DOWN) */}
               <Box mt={3}>
                  <Box display="flex" flexWrap="wrap" gap={1} mb={1}>
                     {project.stack.map((tech, index) => (
                     <Chip
                        key={index}
                        label={tech}
                        size="small"
                        variant="outlined"
                        sx={{
                           transition: "all 0.4s ease",
                           borderColor:
                              flashSkill === tech
                                 ? "#8b5cf6"
                                 : "var(--color-surface-3)",
                           color:
                              flashSkill === tech
                                 ? "#8b5cf6"
                                 : "inherit",
                           boxShadow:
                              flashSkill === tech
                                 ? "0 0 8px rgba(139,92,246,0.6)"
                                 : "none",
                           transform:
                              flashSkill === tech
                                 ? "scale(1.08)"
                                 : "scale(1)",
                           }}
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
            </Box>

            {/* RIGHT SIDE */}
            {project.thumbnail && (
               <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  sx={{flex: { xs: "1", md: "0 0 300px" }}}
               >
                  {/* Thumbnail */}
                  <Box
                     component="img"
                     src={project.thumbnail}
                     alt={project.title}
                     sx={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        borderRadius: "12px",
                        border: "1px solid var(--color-surface-3)",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                           transform: "scale(1.08)",
                           zIndex: 5,
                           position: "relative",
                        },
                     }}
                  />

                  {/* Buttons */}
                  <Box display="flex" gap={1.5} mt={2} justifyContent="flex-end">
                     {project.github && (
                        <Button
                           size="small"
                           variant="text"
                           startIcon={<GitHubIcon fontSize="small" />}
                           href={project.github}
                           target="_blank"
                           className="text-white! hover:text-violet-500!"
                        >
                           Repo
                        </Button>
                     )}

                     {project.demo && (
                        <Button
                           size="small"
                           variant="text"
                           startIcon={<LaunchIcon fontSize="small" />}
                           href={project.demo}
                           target="_blank"
                           className="text-white! hover:text-violet-500!"
                        >
                           Live Demo
                        </Button>
                     )}
                  </Box>
               </Box>
            )}
         </Box>
      </Card>
   );
}
