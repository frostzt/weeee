import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

// Styles, icons
import cx from 'classnames';
import styles from '../styles/Home.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

// Contexts
import AuthContext from '../contexts/AuthContext/Auth.context';

// Components
import Logo from '../components/Logo/Logo';
import { LinkedButton } from '../components/Button/Button';
import FeatureCard from '../components/FeatureCard/FeatureCard';

const Home: React.FC = () => {
  const [session, loading] = useSession();
  const [counter, setCounter] = useState<number>(1);

  const { user } = useContext(AuthContext);

  // console.log(user);

  // Animations
  const cardsControl = useAnimation();
  const headingControl = useAnimation();
  const subTitleControl = useAnimation();

  // Monitor viewport of sections
  const [featuresRef, featuresInView] = useInView({ threshold: 0.25 });

  // Sequences
  const headerSequence = async () => {
    await headingControl.start({ opacity: 1, y: 0 });
    return await subTitleControl.start({ opacity: 1, y: 0 });
  };

  const featuresSequence = async () => {
    await cardsControl.start({ y: '0', opacity: 1 }, { duration: 0.5 });
  };

  // Effects
  useEffect(() => {
    headerSequence();
  }, []);

  useEffect(() => {
    if (featuresInView) {
      featuresSequence();
    }
  }, [featuresInView]);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 4000);

    return () => clearInterval(counterInterval);
  }, []);

  return (
    <>
      <Logo initial={{ x: '-500%' }} animate={{ x: '0' }} transition={{ ease: 'easeInOut', duration: 1 }} className={styles.logo} />
      <Head>
        <title>Weeee - Management made easier</title>
        <meta name="description" content="A simple application to manage your team, projects, and tasks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* --------------------------------- HEADER --------------------------------- */}
      <header data-testid="landing-header" className={styles.header}>
        <div className={styles.title_sub_container}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={headingControl}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className={styles.title}
          >
            Manage{' '}
            <div>
              your{' '}
              <div
                className={cx([
                  styles.change,
                  styles.show,
                  // styles.hidden,
                  // counter % 3 !== 2 && counter % 3 !== 0 ? styles.show : null,
                ])}
              >
                team
              </div>
              {/* <div
                className={cx([
                  styles.change,
                  styles.hidden,
                  counter % 3 === 2 ? styles.show : null,
                ])}
              >
                projects
              </div>
              <div
                className={cx([
                  styles.change,
                  styles.hidden,
                  counter % 3 === 0 ? styles.show : null,
                ])}
              >
                board
              </div> */}
            </div>
            easily!
          </motion.h1>
          <motion.sub initial={{ opacity: 0, y: 20 }} animate={subTitleControl} className={styles.subtitle}>
            Manage everything at one place
            <br />
          </motion.sub>
        </div>
        <div className={styles.godown}>
          <IoIosArrowDown className={styles.godown_icon} />
        </div>
      </header>

      {/* --------------------------------- FEATURES --------------------------------- */}
      <section data-testid="landing-features" ref={featuresRef} className={styles.features}>
        <motion.div initial={{ y: '20%', opacity: 0 }} animate={cardsControl} className={styles.cards}>
          <FeatureCard
            image="/images/svgs/teamwork.svg"
            heroUrl="/images/img/teamwork.png"
            title="Manage teams"
            desc="Managing team has never been easier. Now manage your entire team with just click of a few buttons."
            fullDesc="Managing team has never been easier. Now manage your entire team with just click of a few buttons. Add, edit, remove and do just whatever you want to with your team members working on a particular project! Apply specific roles to certain people to lead a team and get detailed review and reports from several teams working on different projects!"
            color="rgba(255, 131, 123, 1)"
          />
          <FeatureCard
            image="/images/svgs/projects.svg"
            heroUrl="/images/img/projects.png"
            title="Nail projects"
            desc="Create, delete, edit and do everything with your projects, assign teams and people to work on it, that's easy!"
            fullDesc="Create, delete, edit and do everything with your projects, assign teams and people to work on it, that's easy! Manage the start, progress, and completion of the projects. Assign teams to work on specific projects and allow them to provide you reports on what is being done and what is done!"
            color="rgba(255, 165, 2, 1)"
          />
          <FeatureCard
            image="/images/svgs/boards.svg"
            heroUrl="/images/img/boards.png"
            title="Create boards"
            desc="Wanna let everyone plan or know something? Or maybe you want your team to be more productive? Say no more!"
            fullDesc="Wanna let everyone plan or know something? Or maybe you want your team to be more productive? Say no more! Boards can not only help you stay creative but they take away the pain in writing a huge report or idea just to explain someone or a group of people. Boards can express ideas, content, and several others things much more creatively and easily!"
            color="rgba(30, 144, 255, 1)"
          />
        </motion.div>
        <LinkedButton link="/auth" extraClass={styles.btn}>
          Try it now!
        </LinkedButton>
      </section>

      {/* --------------------------------- WHY-WE --------------------------------- */}
      <section data-testid="landing-why" className={styles.whywe}>
        <div className={styles.whywe__container}>
          <h2 className={styles.whywe__title}>
            But why <span className={styles.whywe__title_grad}>weeee?</span>
          </h2>
          <p className={styles.whywe__paragraph}>
            We provide you with complete control over the software, after all you&apos;re the one using it. You can change it as you like.
            Which makes this open source software is not only free but highly configurable. Not only that we are constantly working on
            bringing latest updates and developing new features as well.
          </p>
          <br />
          <p className={styles.whywe__paragraph}>
            Now you&apos;re wondering, this is too good to be true! Naah! It is true; you get everything for free, however, yes there is a
            catch! The application deployed here is for feature purposes and will not hold any data for long! Therefore hosting the app is
            upto you! We have tried our best to make sure that this application is as perfect and easy to use as possible with easy
            deployment and easy configuration!
          </p>
        </div>
      </section>

      {/* --------------------------------- FOOTER --------------------------------- */}
      {/* FOOTER-FLOATER */}
      <footer data-testid="landing-footer" className={styles.footer}>
        <div className={styles.footer__floater}>
          <div className={cx([styles.footer__floater_content, styles.footer__floater_seen])}>
            Wanna see the the app repository and jump straight into how to deploy it?
          </div>
          <a
            rel="noreferrer"
            className={cx([styles.footer__floater_content, styles.footer__floater_unseen])}
            href="https://github.com/frostzt/weeee"
            target="_blank"
          >
            <div>CLICK ME!</div>
          </a>
        </div>

        {/* FOOTER-UPPER-PART */}
        <div className={styles.footer__upper}>
          <div className={styles.footer__logo}>Weeee</div>
          <div className={styles.footer__links}>
            <div className={styles.footer__links_holder}>
              <Link href="/how-to-deploy">
                <div className={styles.footer__links_link}>How to deploy</div>
              </Link>
            </div>
            <div className={styles.footer__links_holder}>
              <Link href="/about">
                <div className={styles.footer__links_link}>About</div>
              </Link>
            </div>
            <div className={styles.footer__links_holder}>
              <a rel="noreferrer" href="mailto:aidenfrostbite@gmail.com?subject=Important!" target="_blank">
                <div className={styles.footer__links_link}>Contact</div>
              </a>
            </div>
            <div className={styles.footer__links_holder}>
              <a rel="noreferrer" href="https://frostzt.vercel.app" target="_blank">
                <div className={styles.footer__links_link}>Portfolio</div>
              </a>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: '90%',
            margin: '0 auto',
            marginTop: '5rem',
          }}
        />

        {/* FOOTER-LOWER-PART */}
        <div className={styles.footer__lower}>
          <div className={styles.footer__lower_linkHolder}>
            <a href="https://twitter.com/souravsrawat" className={styles.footer__lower_link}>
              <AiFillTwitterCircle className={styles.footer__lower_link_icon} />
            </a>
          </div>
          <div className={styles.footer__lower_linkHolder}>
            <a href="https://github.com/frostzt" className={styles.footer__lower_link}>
              <AiFillGithub className={styles.footer__lower_link_icon} />
            </a>
          </div>
          <div className={styles.footer__lower_linkHolder}>
            <a href="https://www.linkedin.com/in/frostzt/" className={styles.footer__lower_link}>
              <AiFillLinkedin className={styles.footer__lower_link_icon} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
