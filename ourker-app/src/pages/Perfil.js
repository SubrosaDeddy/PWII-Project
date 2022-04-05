import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Search() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Card sx={{ maxWidth: 500, minWidth: 500 }}>
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                      R
                    </Avatar>}
                    title="Juanito Perez Lopez"
                    subheader="Diseñador Jr" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Estudiante de Xvo semestre en la carrera "***", universidad "***",
                         X años de experiencia en el ambito
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>
        </div>
    </>
    
  );
}