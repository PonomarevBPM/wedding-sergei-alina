import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { Timer } from '../components/Timer';
import { Theme } from '../styles/theme';
import { GuestName } from '../utils/GuestName';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
  statementContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
  },
  statementNames: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
  statementText: {
    fontFamily: theme.font.commons,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  timerHeading: {
    fontFamily: theme.font.rammillasBold,
    fontSize: 20,
    position: 'relative',
    marginBottom: 60,
  },
  pin: {
    aspectRatio: 1,
    width: 100,
    position: 'absolute',
    top: '-150%',
    left: '85%',
    zIndex: -1,
    transform: 'rotate(0)',
  },
}));

export function NamedStatement() {
  const classes = useStyles();

  const { guestsName } = useParams();

  return (
    <AnimatedBaseLayout>
      <div className={classes.statementContainer}>
        <GuestName guest={guestsName} />
        <span className={classes.statementText}>
          31 августа станет днем появления
          <br />
          нашей семьи. Мы будем рады разделить
          <br />
          с вами этот счастливый момент.
        </span>
        <span className={classes.timerHeading}>
          ДО СВАДЬБЫ ОСТАЛОСЬ
          <img
            src={`${import.meta.env.BASE_URL}imgs/namedStatement/pomegrante.JPG`}
            className={classes.pin}
          />
        </span>
        <Timer />
      </div>
    </AnimatedBaseLayout>
  );
}
