// Milestone 1
// 	•	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// 	•	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
//
// Milestone 2
// 	•	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// 	•	Click sul contatto mostra la conversazione del contatto cliccato

var app = new Vue({

  el: '#container',
  data: {
    contactIndex: 0,
    contacts: [
	{
		name: 'Michele',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH9wbHfLKLZ3cX50Atk1Imdb8VBR0erRJiA&usqp=CAU',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '10/01/2020 16:15:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Fabio',
		avatar: 'https://miro.medium.com/max/800/1*t0qEftasrCc2qanM79RrmA.png',
		visible: true,
		messages: [
			{
				date: '20/03/2020 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '20/03/2020 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '20/03/2020 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Samuele',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4UTeWWpGIxndkqPhyClv-P7eT6_y_tiKQA&usqp=CAU',
		visible: true,
		messages: [
			{
				date: '28/03/2020 10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received'
			},
			{
				date: '28/03/2020 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '28/03/2020 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luisa',
		avatar: 'https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png',
		visible: true,
		messages: [
			{
				date: '10/01/2020 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '10/01/2020 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			}
		],
	},
]


},
  methods: {
    changeContact: function(index) {

    this.contactIndex = index;

    }
  }

});
