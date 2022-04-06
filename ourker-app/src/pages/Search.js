
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
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
      <Grid container component="main" sx={{ height: '100%', background: 'linear-gradient(to top, #04448c,#00236f)'}}>
       <div style={{marginLeft:'auto',marginRight:'auto',paddingLeft:'5%',paddingRight:'5%', background: '#04448c'}}> 
        <div style={{ display: 'block', flexDirection: 'column',  justifyContent: 'center', marginTop: '10px', height: 'fit-content' }}>
            <Card sx={{ maxWidth: 450, minWidth: 300, margin: 'auto' }}>
                <Button href='Perfil'>
                  <CardHeader
                      avatar={<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                        R
                      </Avatar>}
                      title="Juanito Perez Lopez"
                      subheader="Diseñador Jr" />
                </Button>
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
        <div style={{ display: 'block', flexDirection: 'column',justifyContent: 'center', marginTop: '10px', height: 'fit-content' }}>
            <Card sx={{ maxWidth: 450, minWidth: 300, margin: 'auto' }}>
                <Button href='Perfil'>
                  <CardHeader
                    avatar={<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                          
                    </Avatar>}
                    title="Albertano Santa Cruz"
                    subheader="Animador" />
                </Button>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        El amor es como un elote, a veces te tocan tiernos y otros te salen duros
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>
        </div>
        <div style={{ display: 'block',flexDirection: 'column', justifyContent: 'center', marginTop: '10px', height: 'fit-content'}}>
            <Card sx={{ maxWidth: 450, minWidth: 300, margin: 'auto' }}>
                <Button href='Perfil'>
                  <CardHeader
                    avatar={<Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                          
                    </Avatar>}
                    title="Eduardo Garza"
                    subheader="Direcor y Actor" />
                </Button>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        GOKUUuuUuUUUuu AaAAAaAaaAahhh..... ¡BUM!
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>
        </div>
        </div>
      </Grid>
    </>
    
  );
}