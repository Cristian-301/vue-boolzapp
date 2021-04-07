// Milestone 1
// 	•	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// 	•	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
//
// Milestone 2
// 	•	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// 	•	Click sul contatto mostra la conversazione del contatto cliccato
// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

var app = new Vue({

  el: '#container',
  data: {
		activeContact: true,
    search: "",
    newMessage: "",
		contactIndex: 0,
    contacts: [
	{
		name: 'Michele',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUH9wbHfLKLZ3cX50Atk1Imdb8VBR0erRJiA&usqp=CAU',
		visible: true,
		messages: [
			{
				date: '15:30:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent',
				active: false,
			},
			{
				date: '15:50:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent',
				active: false,
			},
			{
				date: '16:15:22',
				text: 'Tutto fatto!',
				status: 'received',
				active: false,
			}
		],
	},
	{
		name: 'Fabio',
		avatar: 'https://miro.medium.com/max/800/1*t0qEftasrCc2qanM79RrmA.png',
		visible: true,
		messages: [
			{
				date: '16:30:00',
				text: 'Ciao come stai?',
				status: 'sent',
				active: false,
			},
			{
				date: '16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received',
				active: false,
			},
			{
				date: '16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent',
				active: false,
			}
		],
	},
	{
		name: 'Samuele',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4UTeWWpGIxndkqPhyClv-P7eT6_y_tiKQA&usqp=CAU',
		visible: true,
		messages: [
			{
				date: '10:10:40',
				text: 'La Marianna va in campagna',
				status: 'received',
				active: false,
			},
			{
				date: '10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent',
				active: false,
			},
			{
				date: '16:15:22',
				text: 'Ah scusa!',
				status: 'received',
				active: false,
			}
		],
	},
	{
		name: 'Luisa',
		avatar: 'https://i.pinimg.com/originals/30/24/f8/3024f8d283b734bd6b7e4fc5531fe2e9.png',
		visible: true,
		messages: [
			{
				date: '15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent',
				active: false,
			},
			{
				date: '15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received',
				active: false,
			}
		],
	},
	{
		name: 'Mark',
		avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7S9pKMslch4WjEcuH1FTueBDvu3nL4NTsNg&usqp=CAU',
		visible: true,
		messages: [
			{
				date: '17:22:55',
				text: 'Cosa fai questo pomeriggio?',
				status: 'sent',
				active: false,
			},
			{
				date: '15:50:00',
				text: 'Pnesavo di andare a nuotare',
				status: 'received',
				active: false,
			}
		],
	},
],

},
  methods: {

		closeChat: function() {
			this.activeContact = !this.activeContact
		},

		openContact: function() {
			this.activeContact = true
		},

		// scrollBottom: function() {
		// 	var text_window = document.getElementById("messages_window").innerHTML;
		// 	console.log(text_window)

		// 	// window.open()
		// },

		toggleDrop: function(message) {
			message.active = !message.active
		},

		deleteMessage: function(contactIndex, index) {
			this.contacts[contactIndex].messages.splice(index, 1)
		},

    changeContact: function(index) {

    this.contactIndex = index;

    },

    sendText: function (index) {
      this.contacts[index].messages.push({
				date: dayjs().format("HH:mm:ss") ,
				text: this.newMessage,
				status: 'sent',
				active: false,
			})
			
      this.newMessage = "";

      var resp = this.contacts[index].messages;
      setTimeout(function(){
        resp.push({
          date: dayjs().format("HH:mm:ss"),
          text: 'Ok',
					status: 'received',
					active: false,
        })
			}, 1000);
		},
		

    searchContact: function() {
				this.contacts.forEach(
					(element) => {
						element.visible = false;
						if (element.name.toLowerCase().includes(this.search.toLowerCase())) {
							element.visible = true;
						}
					}
				);
			}

  },

});
