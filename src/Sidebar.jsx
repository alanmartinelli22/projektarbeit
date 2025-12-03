import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const Sidebar = () => {
  return (
    <Card sx={{ minWidth: 220 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Details (Sidebar)
        </Typography>
        <Typography variant="body2">
          Hier werden später Details zur ausgewählten Messung angezeigt.
        </Typography>
      </CardContent>
    </Card>
  );
};
