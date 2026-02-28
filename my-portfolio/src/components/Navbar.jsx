import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from '@mui/icons-material/Download';

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
            <a href="#" className="font-semibold text-lg hover:opacity-80 transition hover:text-violet-400">
               Kaden Buchanan
            </a>

            <div className="flex gap-4">
               <Button href="#projects" color="inherit" className="hover:text-violet-400!">Projects</Button>
               <Button 
                  href="/Resume.pdf" 
                  download="KadenBuchananResume.pdf" 
                  color="inherit" 
                  className="hover:text-violet-400!"
                  startIcon={<DownloadIcon fontSize="small" />}
               >
                  Resume
               </Button>

               <IconButton 
                  component="a"
                  href="https://github.com/kadenb04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400!">
                  <GitHubIcon />
               </IconButton>

               <IconButton 
                  component="a"
                  href="https://linkedin.com/in/kaden-buchanan-225b61230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-violet-400!">
                  <LinkedInIcon />
               </IconButton>
            </div>
         </Toolbar>
      </AppBar>
   );
}
