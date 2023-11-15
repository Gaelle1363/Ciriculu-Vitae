'use client';
import styles from './page.module.css'
import { PhoneIcon,InfoIcon,EmailIcon,CheckCircleIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Image,Box,Center,
  Tabs,
  TabList, TabPanels, Tab, TabPanel, AbsoluteCenter
} from '@chakra-ui/react'


export default function Home() {
  return (
    <main> 
      <Center>
       <div className="container">
         <Image
           objectFit='cover'
          borderRadius='full'
           boxSize='200px'
           src={'/photo.jpg'}
          />
         <div className="text">
            Gaëlle Grassart
            <br/> Je suis étudiante en deuxième année de Master MIASHS parcours Web Analyste, 
            <br/>Je suis à la recherche d’un stage de fin d’étude commençant début février 2024 pour une durée de 6 mois dans les domaines du web et de la data.
            
         </div>
        </div>    
        </Center>
        <br />
        <Center><Tabs>
          
            <TabList>
            <Tab>Formations</Tab>
            <Tab>Expériences</Tab>
            <Tab>Langages/Logiciels</Tab>
            <Tab>Autres expériences</Tab>
            <Tab>Loisirs</Tab>
            <Tab>Coordonnées</Tab>
            </TabList>  
          

  <TabPanels>
    
    <TabPanel>
      
        <br/>
        <strong>Master MIASHS</strong> (Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales)  2024<br/>
        Parcours Web Analyste : Bases de données, SEO, Programmation Web, E-marketing…<br/><br/>
        <strong>Licence de Mathématiques</strong> 2022<br/>
        Test Anglais (Altissia) : B1 <br/>
        AED en préprofessionnalisation (2ans) : intervention dans des classes de collège (pédagogie)<br/><br/>
        <strong>Certification PIX</strong> 2022<br/>
        Maîtrise Excel, Informations et données, Protection et sécurité<br/><br/>
        <strong>Diplôme du Baccalauréat</strong> Scientifique - mention assez bien 2018<br/><br/>
        <strong>Diplôme du BAFA</strong> <br/>
        Perfectionnement : Art du spectacle 
    </TabPanel>
     
      <TabPanel>
      <br/>
      <strong>Stagiaire Digital</strong>    People Conventions : Entreprise spécialisée dans l’événementiel<br/>
      Utilisation de Google Analytics : Analyse de visibilité<br/>Avril 2023 – Juin 2023<br/>
      <br/>
      <strong>Création d’un Tchat</strong>    Université de Lille<br/>
      Réalisation à l’aide de HTML, CSS, Javascript, Ajax & PHP<br/>2023<br/><br/>

      <strong>Assistante consultant Digital Analytics</strong>   Optimal Ways : Entreprise spécialisée dans l’analyse du digital<br/>
      Utilisation de Google Tag Manager & Google Analytics<br/>Novembre 2022 – Février 2023<br/><br/>

      <strong>AED en préprofessionnalisation</strong>   Rectorat de Poitiers<br/>
      Observation, intervention ponctuelle & réalisation d’un rallye des maths<br/>2020-2022<br/>
    </TabPanel>
  

    <TabPanel>
      <br/>
  




     SQL<br/>
      React Native<br/>
      Python<br/>
      HTML <br/>
      CSS<br/>
      JavaScript <br/>
      PHP <br/>
      R<br/>
      Git<br/>
      Google Tag Manager <br/>
      Google Analytics <br/>
      Pack Office<br/>
      Première Pro <br/>
      Audacity<br/>
      React
    </TabPanel>
    
    <TabPanel>
       <br/> 
        <strong>Job étudiant</strong> : travail dans une épicerie solidaire<br/><br/>
        <strong>Régisseuse son et lumière</strong> : People Convention<br/><br/>
        <strong>Animatrice BAFA</strong> : Colonie, scout, centre<br/><br/>
       <strong>Professeur de mathématique</strong> : Cours particuliers<br/><br/>
       <strong>Danse</strong> : Elève (10 ans) puis professeur (2 ans)<br/><br/>
      
    </TabPanel>
    
    <TabPanel>
      <Center>
      
       <div>
        <div className="container"> 
         <Image
         objectFit='cover'
          boxSize='100px'
          src={'/dance.png'} 
        />&emsp;&emsp;&emsp;&emsp;
        <Image
         objectFit='cover'
          boxSize='100px'
          src={'/video.png'} 
        />&emsp;&emsp;&emsp;&emsp;
        <Image
         objectFit='cover'
         boxSize='100px'
          src={'/photo.png'} 
        /> &emsp;&emsp;&emsp;&emsp;
          <Image
         objectFit='cover'
         boxSize='100px'
          src={'/listen.png'} 
        />
      
        </div>



        <br/>
        <div className="container">
          <Image
         objectFit='cover'
          boxSize='100px'
          src={'/calendrier.png'} 
        />&emsp;&emsp;&emsp;&emsp;
        <Image
         objectFit='cover'
         boxSize='100px'
          src={'/programmation.png'} 
        />&emsp;&emsp;&emsp;&emsp;
        <Image
         objectFit='cover'
          boxSize='100px'
          src={'/pc_video.png'} 
        />&emsp;&emsp;&emsp;&emsp;
          <Image
         objectFit='cover'
         boxSize='100px'
          src={'/organiser.png'} 
        />
        </div>
        </div>
        

      
      </Center>
    </TabPanel>
    
    <TabPanel>
      
       <br /> 
        <InfoIcon/> &emsp; Gaelle Grassart <br /><br />
        <PhoneIcon /> &emsp;  + 33.7.66.47.15.64 <br /><br />
        <EmailIcon/> &emsp;   gaelle1363@gmail.com <br /><br />
        <MoonIcon/>  &emsp; 27 rue Charles Devendeville 59810 Lesquin <br /><br />
        <CheckCircleIcon/> &emsp; Permis B
     

    </TabPanel>
    
    </TabPanels>
  </Tabs>

  </Center>
    </main>
  )
}
