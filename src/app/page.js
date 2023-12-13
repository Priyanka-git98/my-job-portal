import Header from "./components/Header";
// import Image from "next/image";
// import Profile from '../../public/recruiter.jpg.jpg';
// import styles from './globals.css';

export default function Home() {
  return (
    <main>
      <Header />
      {/* <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={Profile}  
            alt="Recruiter with Laptop"
            width={500}  
            height={800}  
          />
        </div>
        <div className={styles.textContainer}>
          <p>On registering, you can:</p>
          <ul>
            <li>Build your profile and let recruiters find you</li>
            <li>Get job postings delivered right to your email</li>
            <li>Find a job and grow your career</li>
          </ul>
        </div>
      </div> */}
    </main>
  );
}
