from pathlib import Path
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs" / "screenshots"
OUT.mkdir(parents=True, exist_ok=True)

SCALE = 2


def font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size * SCALE)
        except OSError:
            pass
    return ImageFont.load_default()


def canvas(width, height):
    return Image.new("RGB", (width * SCALE, height * SCALE), "#f4f7f4")


def rounded(draw, xy, fill, outline=None, radius=8, width=1):
    xy = tuple(v * SCALE for v in xy)
    draw.rounded_rectangle(xy, radius=radius * SCALE, fill=fill, outline=outline, width=width * SCALE)


def text(draw, xy, value, size=18, fill="#172126", bold=False):
    draw.text((xy[0] * SCALE, xy[1] * SCALE), value, fill=fill, font=font(size, bold))


def pill(draw, xy, label, fill="#eef5f2", ink="#31584a", pad_x=11):
    x, y = xy
    f = font(13, True)
    bbox = draw.textbbox((0, 0), label, font=f)
    w = (bbox[2] - bbox[0]) // SCALE + pad_x * 2
    h = 28
    rounded(draw, (x, y, x + w, y + h), fill, radius=14)
    draw.text(((x + pad_x) * SCALE, (y + 6) * SCALE), label, fill=ink, font=f)
    return w


def save(img, name):
    img.save(OUT / name, optimize=True)


def schedule_tags():
    img = canvas(920, 360)
    d = ImageDraw.Draw(img)
    text(d, (28, 24), "Schedule Tags", 28, bold=True)
    text(d, (28, 62), "Badges in the match list summarize time, score, and broadcast at a glance.", 15, "#607077")

    rounded(d, (28, 104, 892, 292), "#ffffff", "#d7e0df")
    text(d, (52, 130), "Jun 12", 14, "#607077", True)
    text(d, (52, 154), "9:00 PM", 24, bold=True)
    text(d, (52, 190), "ET", 13, "#607077", True)

    text(d, (174, 132), "United States", 24, bold=True)
    text(d, (338, 132), "vs", 16, "#607077", True)
    text(d, (376, 132), "Paraguay", 24, bold=True)
    pill(d, (174, 174), "Group D, Matchday 1")
    pill(d, (346, 174), "Atlanta")
    pill(d, (424, 174), "Scheduled")
    pill(d, (520, 174), "Upcoming", "#eef5f2", "#31584a")

    pill(d, (674, 142), "0-0", "#172126", "#ffffff", 15)
    pill(d, (742, 142), "FOX", "#fff2d5", "#78551d", 14)
    rounded(d, (816, 139, 850, 173), "#f7faf8", "#d7e0df")
    text(d, (828, 144), "+", 18, "#22324a", True)

    text(d, (52, 318), "Score pill", 13, "#607077", True)
    text(d, (174, 318), "Broadcast channel", 13, "#607077", True)
    text(d, (346, 318), "Match metadata", 13, "#607077", True)
    text(d, (520, 318), "Time-window status", 13, "#607077", True)
    save(img, "schedule-tags.png")


def team_path_tags():
    img = canvas(920, 360)
    d = ImageDraw.Draw(img)
    text(d, (28, 24), "Team and Path Tags", 28, bold=True)
    text(d, (28, 62), "Team cards and the path view use compact tags for ranking, group, points, and route state.", 15, "#607077")

    rounded(d, (28, 104, 408, 292), "#ffffff", "#d7e0df")
    text(d, (54, 128), "United States", 26, bold=True)
    x = 54
    y = 176
    for label in ["Group D", "FIFA #14", "0 pts", "Third place (1930)"]:
        x += pill(d, (x, y), label) + 8
        if x > 300:
            x = 54
            y += 38

    rounded(d, (456, 104, 892, 292), "#101820", "#30404f")
    rounded(d, (456, 104, 892, 146), "#18222d")
    pill(d, (480, 113), "Optimal: Group winner", "#1b3a2b", "#9be3ba")
    text(d, (480, 170), "Win Group D", 24, "#ffffff", True)
    text(d, (480, 208), "Main route continues through the preferred knockout slot.", 15, "#b8c7d3")
    rounded(d, (480, 246, 704, 276), "#132733", "#3a4b5b")
    text(d, (494, 252), "Runner-up branch", 13, "#b8c7d3", True)
    rounded(d, (720, 246, 864, 276), "#2b1d25", "#3a4b5b")
    text(d, (734, 252), "Risk path", 13, "#f2b6bd", True)
    save(img, "team-path-tags.png")


def api_tags():
    img = canvas(920, 300)
    d = ImageDraw.Draw(img)
    text(d, (28, 24), "Score API Notice", 28, bold=True)
    text(d, (28, 62), "The top banner documents the live-score dependency and fallback behavior.", 15, "#607077")

    rounded(d, (28, 108, 892, 172), "#fff8e8", "#d6af64")
    text(
        d,
        (52, 129),
        "Scores update when this page refreshes and depend on an external scores API.",
        17,
        "#6b4b17",
        True,
    )
    text(d, (52, 202), "If the API is unavailable, scheduled fixtures still display.", 16, "#607077")
    pill(d, (52, 234), "Scores refreshed: 3 updated", "#f7faf8", "#607077", 12)
    pill(d, (304, 234), "Scores unavailable", "#eceff1", "#66747b", 12)
    save(img, "score-api-tags.png")


schedule_tags()
team_path_tags()
api_tags()
