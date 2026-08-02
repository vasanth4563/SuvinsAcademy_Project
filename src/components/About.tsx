import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const FEATURES = [
  {
    icon: <MenuBookIcon />,
    title: "Multi-Syllabus",
    desc: "CBSE, ICSE, IGCSE,& TNBSE under one roof.",
  },
  {
    icon: <VerifiedIcon />,
    title: "Expert Faculty",
    desc: "8+ qualified teachers with 10–28 years of experience.",
  },
  {
    icon: <EmojiEventsIcon />,
    title: "Proven Results",
    desc: "100% board pass rate with consistent district & state ranks.",
  },
  {
    icon: <PeopleAltIcon />,
    title: "100+ Students",
    desc: "A thriving community of learners from Class 6 to 12.",
  },
  {
    icon: <LightbulbIcon />,
    title: "Smart Classrooms",
    desc: "Interactive digital boards and e-learning resources.",
  },
  {
    icon: <HomeWorkIcon />,
    title: "Holistic Development",
    desc: "Sports, arts, and cultural activities alongside academics.",
  },
];

export default function About() {
  return (
    <Box id="about" sx={{ py: { xs: 9, md: 13 }, background: "white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          {/* Visual Left */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative", pb: { xs: 0, md: 4 } }}>
              {/* Main box */}
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, #0d1b3e 0%, #1e3560 100%)",
                  borderRadius: 5,
                  p: { xs: 4, md: 5 },
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(13,27,62,0.3)",
                }}
              >
                {/* Deco circles */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 160,
                    height: 160,
                    background: "rgba(192,57,43,0.18)",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -30,
                    left: -30,
                    width: 110,
                    height: 110,
                    background: "rgba(245,166,35,0.15)",
                    borderRadius: "50%",
                  }}
                />
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.72rem",
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                >
                  Established
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display",serif',
                    fontWeight: 800,
                    fontSize: { xs: "4.5rem", md: "5.5rem" },
                    color: "white",
                    lineHeight: 1,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  2024
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.82rem",
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    mt: 1,
                    mb: 3,
                  }}
                >
                  2+ Years of Excellence
                </Typography>
                <Divider
                  sx={{ borderColor: "rgba(255,255,255,0.12)", mb: 3 }}
                />
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {["CBSE", "ICSE", "IGCSE", "IB", "TNBSE"].map(
                    (s) => (
                      <Box
                        key={s}
                        sx={{
                          background: "rgba(255,255,255,0.1)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: 99,
                          px: 2,
                          py: 0.5,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        {s}
                      </Box>
                    ),
                  )}
                </Box>
              </Box>

              {/* Floating card */}
              <Paper
                elevation={8}
                sx={{
                  position: { xs: "relative", md: "absolute" },
                  bottom: { md: 0 },
                  right: { md: -28 },
                  mt: { xs: -3, md: 0 },
                  ml: { xs: "auto" },
                  width: "fit-content",
                  background: "#c0392b",
                  color: "white",
                  p: 2.5,
                  borderRadius: 3,
                  zIndex: 2,
                  boxShadow: "0 10px 36px rgba(192,57,43,0.45)",
                  minWidth: 160,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display",serif',
                    fontWeight: 800,
                    fontSize: "1.9rem",
                    lineHeight: 1,
                  }}
                >
                  100%
                </Typography>
                <Typography
                  sx={{ fontSize: "0.75rem", opacity: 0.88, mt: 0.5 }}
                >
                  Board Pass Rate
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* Content Right */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                background: "rgba(192,57,43,0.08)",
                border: "1.5px solid rgba(192,57,43,0.2)",
                borderRadius: 99,
                px: 2,
                py: 0.8,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#c0392b",
                }}
              />
              <Typography
                sx={{
                  color: "#c0392b",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                About Our Academy
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "2.6rem" },
                color: "primary.main",
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Building Tomorrow's{" "}
              <Box component="span" sx={{ color: "secondary.main" }}>
                Leaders
              </Box>{" "}
              Today
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.92rem", md: "1rem" },
                lineHeight: 1.85,
                mb: 4,
              }}
            >
              Suvin's Academy has been a beacon of academic excellence since
              2024. We offer comprehensive education from Class 6 to 12 across
              five major Syllabus — under one roof. Our approach blends rigorous
              academics with holistic development, ensuring every student
              reaches their fullest potential.
            </Typography>

            {/* Feature cards — equal height */}
            <Grid container spacing={2} alignItems="stretch">
              {FEATURES.map((f, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={f.title}
                  sx={{ display: "flex" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 2.5,
                      borderRadius: 3,
                      border: "1.5px solid #e8ecf5",
                      background: "#f4f6fb",
                      width: "100%",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "secondary.main",
                        transform: "translateY(-3px)",
                        boxShadow: "0 8px 24px rgba(13,27,62,0.1)",
                        background: "white",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: i % 2 === 0 ? "primary.main" : "secondary.main",
                        mt: 0.3,
                        flexShrink: 0,
                        "& svg": { fontSize: "1.3rem" },
                      }}
                    >
                      {f.icon}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          color: "primary.main",
                          mb: 0.4,
                        }}
                      >
                        {f.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.78rem",
                          color: "text.secondary",
                          lineHeight: 1.6,
                        }}
                      >
                        {f.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* ── CEO / Founder Profile ── */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            background:
              "linear-gradient(135deg, #0d1b3e 0%, #192b5c 60%, #243d7a 100%)",
            borderRadius: 5,
            p: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 6 },
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 24px 64px rgba(13,27,62,0.35)",
          }}
        >
          {/* Deco blobs */}
          <Box
            sx={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 220,
              height: 220,
              background: "rgba(192,57,43,0.15)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -40,
              left: -40,
              width: 160,
              height: 160,
              background: "rgba(245,166,35,0.1)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* Photo */}
          <Box
            sx={{
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              zIndex: 1,
            }}
          >
            <Box
              component="img"
              src="/ceo.jpg"
              alt="CEO of Suvin's Academy"
              sx={{
                width: { xs: 150, md: 190 },
                height: { xs: 150, md: 190 },
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "35%",
                border: "3px solid rgba(255,255,255,0.2)",
                outline: "3px solid #F5A623",
                outlineOffset: "2px",
                boxShadow:
                  "0 0 30px rgba(245,166,35,0.4), 0 12px 40px rgba(0,0,0,0.5)",
              }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "inline-block",
                  background: "linear-gradient(90deg, #F5A623, #f0c040)",
                  borderRadius: 99,
                  px: 1,
                  py: 0.4,
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "#0d1b3e",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  mt: 0.5,
                }}
              >
                Founder &amp; Proprietor
              </Box>
            </Box>
          </Box>

          {/* Text */}
          <Box sx={{ zIndex: 1, textAlign: { xs: "center", md: "left" } }}>
            {/* Section label */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                background: "rgba(245,166,35,0.15)",
                border: "1px solid rgba(245,166,35,0.35)",
                borderRadius: 99,
                px: 2,
                py: 0.5,
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#F5A623",
                }}
              />
              <Typography
                sx={{
                  color: "#F5A623",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                About Proprietor
              </Typography>
            </Box>

            {/* Name */}
            <Typography
              sx={{
                fontFamily: '"Playfair Display",serif',
                fontWeight: 800,
                fontSize: { xs: "1.5rem", md: "1.9rem" },
                color: "white",
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              Mrs. Subashini.V
            </Typography>

            {/* Qualifications */}
            <Typography
              sx={{
                color: "#F5A623",
                fontWeight: 600,
                fontSize: "0.88rem",
                mb: 0.5,
                letterSpacing: 0.3,
              }}
            >
              B.Sc., B.Ed, MBA
            </Typography>

            {/* Bio */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: "0.85rem", md: "0.93rem" },
                lineHeight: 1.85,
                mb: 2,
              }}
            >
              A passionate educator with over{" "}
              <strong style={{ color: "white" }}>
                10 years of teaching experience
              </strong>
              , she is dedicated to helping students achieve academic excellence
              through quality education, personalized guidance, and continuous
              motivation. Her strong academic background, combined with
              practical teaching expertise, enables her to understand the unique
              learning needs of every student.
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: "0.85rem", md: "0.93rem" },
                lineHeight: 1.85,
                mb: 3,
              }}
            >
              At Suvin's Academy, Mrs. Subashini believes that every student has
              the potential to succeed when provided with the right support,
              encouragement, and learning environment. 
            </Typography>

            {/* Syllabus tags */}
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {["CBSE", "ICSE", "IGCSE","TNBSE"].map((s) => (
                <Box
                  key={s}
                  sx={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(245,166,35,0.4)",
                    color: "#F5A623",
                    borderRadius: 99,
                    px: 1.8,
                    py: 0.4,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: 0.5,
                  }}
                >
                  {s}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
