import { Box, Button, Container, Typography } from "@mui/material";
import { useBlogStyles } from "../../_styles/blog/blog";
import { blogPage } from "../../_utilities/blog/blog";

export function BlogPage() {
  const styles = useBlogStyles();

  return (
    <Box component="main" className={styles.page}>
      <Container maxWidth="lg">
        <Box className={styles.intro}>
          <Typography component="h1" className={styles.title}>
            {blogPage.title}
          </Typography>
          <Typography className={styles.description}>{blogPage.description}</Typography>
          <Box component="img" src={blogPage.image} alt="Living Your Best Life" className={styles.coverImage} />
        </Box>

        <Box className={styles.postGrid}>
          {blogPage.posts.map((post) => (
            <Box component="article" key={post.href} className={styles.postCard}>
              <Typography component="h2" className={styles.postTitle}>
                {post.title}
              </Typography>
              <Typography className={styles.excerpt}>{post.excerpt}</Typography>
              <Button href={post.href} variant="contained" className={styles.readMore}>
                Read More
              </Button>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
