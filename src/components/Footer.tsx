import React from "react";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { link } from "framer-motion/client";

const NAVY = "#192b5c";

const LINKS = {
  "Quick Links": [
    "Home",
    "About",
    "Courses",
    "Achievements",
    "Faculty",
    "Contact",
  ],
  Syllabus: ["CBSE", "ICSE", "IGCSE", "TNBSE"],
  Subjects: [
    "Tamil",
    "Hindi",
    "English",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
  ],
};

const SOCIALS = [
  { icon: <InstagramIcon fontSize="small" />,label: "Instagram" },
  { icon: <WhatsAppIcon fontSize="small" />, label: "WhatsApp" },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id.toLowerCase()}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(160deg, #101d3e 0%, ${NAVY} 100%)`,
        color: "white",
        pt: { xs: 7, md: 9 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* ── Brand with EXACT logo ── */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2.5 }}
            >
              {/* Exact original logo — no cropping, no modifications */}
              <Box
                component="img"
                src="/logo.png"
                alt="Suvin's Academy Logo"
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "50%",
                  objectFit: "cover",
                  flexShrink: 0,
                  border: "2px solid rgba(255,255,255,0.2)",
                  outline: "2.5px solid #F5A623",
                  outlineOffset: "3px",
                  boxShadow:
                    "0 0 16px rgba(245,166,35,0.5), 0 6px 20px rgba(0,0,0,0.45)",
                }}
              />
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display",serif',
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    lineHeight: 1.15,
                    color: "white",
                  }}
                >
                  Suvin's Academy
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.6rem",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    mt: 0.3,
                  }}
                >
                  Learn · Grow · Excel
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.38)",
                    fontSize: "0.6rem",
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    mt: 0.2,
                  }}
                >
                  Education Empowers Change
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.83rem",
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 280,
              }}
            >
              Nurturing academic excellence since 2024. A premier multi-syllabus
              institution offering Classes 6–12 across CBSE, ICSE, IGCSE,and
              TNBSE.
            </Typography>

            {/* Social icons */}
            <Box sx={{ display: "flex", gap: 1 }}>
              {SOCIALS.map((s) => (
                <Box
                  key={s.label}
                  title={s.label}
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "#c0392b",
                      borderColor: "#c0392b",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {s.icon}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* ── Link Columns ── */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <Grid item xs={6} sm={4} md={2.5} key={heading}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  mb: 2,
                  letterSpacing: 0.5,
                  color: "white",
                }}
              >
                {heading}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
                {items.map((item) => (
                  <Typography
                    key={item}
                    onClick={() => scrollTo(item)}
                    sx={{
                      fontSize: "0.81rem",
                      color: "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      transition: "all 0.25s ease",
                      "&:hover": { color: "white", pl: 0.5 },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mt: 6, mb: 3 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 3,
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.5,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}
          >
            © {new Date().getFullYear()} Suvin's Academy. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#c0392b",
                animation: "pulse-dot 2s ease-in-out infinite",
                "@keyframes pulse-dot": {
                  "0%,100%": { opacity: 1 },
                  "50%": { opacity: 0.35 },
                },
              }}
            />
            <Typography
              sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.38)" }}
            >
              Admissions Open 2025–26
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
