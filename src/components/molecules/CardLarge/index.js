import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#F6F7F8',
    marginBottom: 18
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    flexDirection: 'flex-start',
  
    flex: 1,
    maxWidth: 800,
    fontSize: 24,
    
  },
  contentagain: {
      fontSize: 24,
      
  }
});

export default function CardLarge({title, desc}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Box display="flex" flexDirection="row"  p={1} m={1} >
      <Box className={classes.content}>
        {title}
        </Box>
        <Box className={classes.contentagain} >
        {desc}
        </Box>
        
         </Box>
     
      </CardContent>
      
    </Card>
  );
}