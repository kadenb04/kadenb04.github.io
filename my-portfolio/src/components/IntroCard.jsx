import { Card, CardContent, Typography, Avatar } from "@mui/material";

export default function IntroCard() {
    return (
        <section className="py-15 px-6">
            <div className="max-w-4xl mx-auto">
                <Card
                    elevation={0}
                    sx={{
                        backgroundColor: "var(--color-surface-2)",
                        border: "1px solid var(--color-surface-3)",
                        borderRadius: "20px",
                    }}
                >
                    <CardContent className="flex flex-col items-center text-center gap-6 py-10">

                    <Avatar
                        src="././public/profile.jpg"
                        sx={{ width: 120, height: 120 }}
                    />

                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        Hi, I'm Kaden Buchanan
                    </Typography>

                    <Typography variant="body1" sx={{ color: "var(--color-text-secondary)", maxWidth: 600 }}>
                      Software developer from Utah focused on full-stack web
                        applications and game development.
                    </Typography>

                  </CardContent>
                </Card>
            </div>
        </section>
    );
}