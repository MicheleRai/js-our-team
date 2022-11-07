/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede*/

/*Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg*/

const cardContainer = document.querySelector('.card-container')
const arrTeam = [
    {
        name: 'Wayne Barnett',
        job: 'Founder & CEO',
        photo: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        job: 'Chief Editor',
        photo: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        job: 'Office Manager',
        photo: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        job: 'Social Media Manager',
        photo: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        job: 'Developer',
        photo: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        job: 'Graphic Designer',
        photo: 'barbara-ramos-graphic-designer.jpg',
    },
];

for (let i = 0; i < arrTeam.length; i++) {
    const member = arrTeam[i];
    console.log(member);
    const cardMember = document.createElement('div');
    cardMember.classList.add('card');
    //cardMember.innerHTML = member;
    cardContainer.append(cardMember);

    let cardMemberPh = document.createElement('img');
    cardMemberPh.innerHTML = ${arrTeam[i].photo};
    cardMember.append(cardMemberPh);


    let cardMemberNm = document.createElement('div');
    cardMemberNm.innerHTML = ${arrTeam[i].name};
    cardMember.append(cardMemberNm);

    let cardMemberJb = document.createElement('div');
    cardMemberJb.innerHTML = ${arrTeam[i].job};
    cardMember.append = (cardMemberJb);
}

