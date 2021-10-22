import { Container, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../config";

const BrowseVideos = () => {
  const url = app_config.api_url;

  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = () => {
    fetch(url + "/video/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideoList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const showVideo = () => {
    if (!loading) {
      return (
        <Grid container spacing={5}>
          {videoList.map((video) => {
            return (
              <Grid item md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    image={url + "/" + video.thumbnail}
                  />
                  <CardContent>
                    <h2>{video.title}</h2>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      );
    }
  };

  return (
    <Container>
      <h2>Browse Videos</h2>
      <hr />

      {showVideo()}
    </Container>
  );
};

export default BrowseVideos;
