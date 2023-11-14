'use client';
import styles from './page.module.css'
import { PhoneIcon,InfoIcon,EmailIcon,CheckCircleIcon, MoonIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
  Image,Box,Badge,Center,
  Tabs,
  TabList, TabPanels, Tab, TabPanel, AbsoluteCenter
} from '@chakra-ui/react'


export default function Home() {
  return (
    <main> 
       <div className="container">
         <Image
           objectFit='cover'
          borderRadius='full'
           boxSize='200px'
           src={'/photo.jpg'}
          />
         <div className="text">
           <p>Bonjour, je m'appelle Gaëlle Grassart. 
            <br/> Je suis étudiante en deuxième année de Master MIASHS parcours Web Analyste, 
            <br/>je suis à la recherche d’un stage de fin d’étude commençant début février 2024 pour une durée de 6 mois dans les domaines du web et de la data.
            </p>
         </div>
        </div>    

        <br />
        <Tabs>
          <Center>
            <TabList>
            <Tab>Formations</Tab>
            <Tab>Expériences</Tab>
            <Tab>Langages/Logiciels</Tab>
            <Tab>Autres expériences</Tab>
            <Tab>Loisirs</Tab>
            <Tab>Coordonnées</Tab>
            </TabList>  
          </Center>

  <TabPanels>
    <Center>
    <TabPanel>
      <p>
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
Perfectionnement : Art du spectacle </p>
    </TabPanel></Center>
   <Center> <TabPanel>
      <p><br/>
        Stagiaire Digital<br/>
Utilisation de Google Analytics : Analyse de visibilité<br/>
People Conventions : Entreprise spécialisée dans l’événementiel<br/>
Avril 2023 – Juin 2023<br/>
<br/>
Création d’un Tchat<br/>
Réalisation à l’aide de HTML, CSS, Javascript, Ajax & PHP<br/>
Université de Lille<br/>
2023<br/><br/>

Assistante consultant Digital Analytics<br/>
Utilisation de Google Tag Manager & Google Analytics<br/>
Optimal Ways : Entreprise spécialisée dans l’analyse du digital<br/>
Novembre 2022 – Février 2023<br/><br/>

AED en préprofessionnalisation<br/>
Observation, intervention ponctuelle & réalisation d’un rallye des maths<br/>
Rectorat de Poitiers<br/>
2020-2022<br/></p>
    </TabPanel></Center>
    <Center> <TabPanel>
      <p><br/>
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
React</p>
    </TabPanel></Center>
    <Center>  <TabPanel>
   <p> <br/> Professeur de mathématique : Cours particuliers<br/>
Animatrice BAFA : Colonie, scout, centre<br/>
Danse : Elève (10 ans) puis professeur (2 ans)<br/>
Régisseuse son et lumière : People Convention<br/></p>
    </TabPanel></Center>
    <Center>   <TabPanel>
<p>
  Danse<br/>
</p>
    </TabPanel></Center>
    <Center> 
      <TabPanel>
      <p>
      <br /> <InfoIcon/> &emsp; Gaelle Grassart <br />
<PhoneIcon /> &emsp;  + 33.7.66.47.15.64 <br />
 <EmailIcon/> &emsp;   gaelle1363@gmail.com <br />
<MoonIcon/>  &emsp; 27 rue Charles Devendeville 59810 Lesquin <br />
<CheckCircleIcon/> &emsp; Permis B
      </p>
    </TabPanel>
    </Center>
  </TabPanels>

  
</Tabs>


    </main>
  )
}
