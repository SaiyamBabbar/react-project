import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1694153273644-68a821119e2e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1464660439080-b79116909ce7?q=80&w=3002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1615226120487-90ec48f5d316?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="card">
        <Card sx={{ width: "30%" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
              } // Use iconUrl if available, otherwise fallback to INIT_URL
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city}{" "}
                <span>
                  {info.humidity > 80 ? (
                    <ThunderstormIcon />
                  ) : info.temp > 15 ? (
                    <WbSunnyIcon />
                  ) : (
                    <AcUnitIcon />
                  )}
                </span>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component={"span"}
              >
                <p>Temperature: {info.temp}°C</p>
                <p>Min Temperature: {info.tempMin}°C</p>
                <p>Max Temperature: {info.tempMax}°C</p>
                <p>Humidity: {info.humidity}%</p>
                <p>Feels Like: {info.feelsLike}°C</p>
                <p>Weather is: {info.weather.main}</p>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" className="btn">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
