import { Button } from '../Button';
import { GitHubIcon, GoogleIcon, LinkedInIcon, MicrosoftIcon } from './icons';
import styles from './styles.module.css';

export const AuthProviders = () => {
  return (
    <section className={styles.providers}>
      <Button variant={'outlined'} icon={<LinkedInIcon />}>
        Continue with LinkedIn
      </Button>
      <Button variant={'outlined'} icon={<MicrosoftIcon />}>
        Continue with Microsoft
      </Button>
      <Button variant={'outlined'} icon={<GitHubIcon />}>
        Continue with GitHub
      </Button>
      <Button variant={'outlined'} icon={<GoogleIcon />}>
        Continue with Google
      </Button>
    </section>
  );
};
