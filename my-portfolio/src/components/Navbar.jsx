import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "var(--color-surface-base)",
        borderBottom: "1px solid var(--color-surface-3)",
      }}
    >
      <Toolbar className="max-w-6xl mx-auto w-full flex justify-between">
        <div className="font-semibold text-lg">
          Kaden Buchanan
        </div>

        <div className="flex gap-4">
          <Button href="#technologies" color="inherit">Tech</Button>
          <Button href="#projects" color="inherit">Projects</Button>
          <Button href="#resume" color="inherit">Resume</Button>

          <IconButton href="https://github.com/YOURUSERNAME">
            <GitHubIcon />
          </IconButton>

          <IconButton href="https://linkedin.com/in/YOURPROFILE">
            <LinkedInIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}