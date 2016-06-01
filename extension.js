(function () {
    //Nome de usuário de onde foi feito a cópia, assim você não precisa mudar tanta coisa.
    var fork = "Elf bot";
		
    //Definir função pela extensão do bot.
    function extend() {
        //Se o bot não iniciou corretamente, tente novamente 1 segundo depois.
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaução para ter certeza de que foi atribuido corretamente.
        var bot = window.bot;

        //Carregar configurações personalizadas abaixo.
        bot.retrieveSettings();

        /*
        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'deu-lhe um biscoito de aveia caseiro macio!',
                    'deu-lhe um biscoito podre e sujo. Era o último do pacote. Que nojo!',
                    'deu-lhe um bolinho de açúcar... O quê? Sem estrelinhas e povilho? Eu não tocaria.',
                    'deu-lhe um biscoito de chocolate. Oh, não, são passas. Eca!',
                    'deu-lhe um enorme biscoito. Quando o toca, ele se duplica num outro biscoito... estranho',
                    'deu-lhe um biscoito da sorte, tem escrito: "Por que você não está trabalhando?"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Arrisque-se!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Saia desse computador!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Não esqueça de comer os vegetais"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão te achar sexy!',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo"',
                    'deu-lhe um biscoito de ouro, mas não dá pra comer... Droga!',
                    'deu-lhe um Oreo e um copo de leite.',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart:',
                    'deu-lhe um biscoito que foi esquecido na chuva... eu não comeria.',
                    'te trouxe biscoitos fresquinhos... parecem deliciosos!'
                ];
        */
        
        bot.commands.testCommand = {
            command: ['test'], //Exemplo de comando
            rank: 'user', //user/bouncer/mod/manager
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me 1, 2, 3... testando"); // Mensagem a ser enviada no chat
                }
            }
        };

        //Carregar o pacote do chat novamente para registrar todas as mudanças
        bot.loadChat();

    }

    //Mudar as configurações padrões do bot e ter certeza que elas foram carregadas corretamente

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Sejam bem vindos e se divirtam :) Um abraço do Kelvin",
        language: "portuguese",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/pt.json",
        startupCap: 10, // 1-200
        startupVolume: 50, // 0-100
        startupEmoji: false, // true ou false
        autowoot: true,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: false,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
        	["theme", "A música não se encaixa nos padrões da sala. "],
        	["op", "Essa música está na lista OP. "],
        	["history", "A música ainda está no histórico. "],
        	["mix", "Você tocou um mix (muito longo) - não permitido. "],
        	["sound", "A música que você tocou tinha má qualidade ou estava sem som. "],
        	["nsfw", "A música que você tocou é NSFW (impróprio). "],
        	["unavailable", "A música que você tocou está indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 5,
        motd: "!roulette",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Inicia o bot e o extende quando for completamente carregado.
    $.getScript("https://rawgit.com/" + fork + "/basicBot/master/basicBot.js", extend);

}).call(this);
