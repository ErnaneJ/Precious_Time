const motivational = {
    phrase: ['Comece onde você está, use o que você tem e faça o que você pode.', 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.', 'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.', 'Não importa que você vá devagar, contanto que você não pare.', 'A inspiração existe, porém temos que encontrá-la trabalhando.', 'Coragem é saber o que não temer', 'Conhecer a si mesmo é o começo de toda sabedoria.', 'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.', 'Acredite em milagres, mas não dependa deles.', 'Não é a carga que o derruba, mas a maneira como você a carrega.', 'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.', 'A vida é 10% o que acontece a você e 90% como você reage a isso.', 'O otimismo é a fé daquele que conduz à realização; nada pode ser feito sem esperança.', 'Um livro, uma caneta, uma criança e um professor podem mudar o mundo.', 'A felicidade não é algo pronto. Ela é feita das suas próprias ações.', 'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.', 'Mude o modo que você olha para as coisas, e as coisas que você olha mudarão.', 'Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros.', 'Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!,', 'As conquistas dependem de 50% de inspiração, criatividade e sonhos, e 50% de disciplina, trabalho árduo e determinação. São duas pernas que devem caminhar juntas.', 'Cada segundo é tempo para mudar tudo para sempre.', 'Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.', 'Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida. Basta que lute e aguarde um novo amanhecer.', 'A paz vem de dentro de você mesmo. Não a procure à sua volta.', 'Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.', 'Aprenda com o ontem. Viva o hoje. tenha esperança para o amanhã.', 'Não há atalhos para nenhum destino onde se vale a pena chegar.', 'Não se deixe intimidar pela opinião dos outros. Só a mediocridade é segura, por isso corra seus riscos e faça o que deseja.', 'Não extinga sua inspiração e sua imaginação; não se torne o escravo do seu modelo.', 'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade.', 'A primavera chegará, mesmo que ninguém mais saiba seu nome, nem acredite no calendário, nem possua jardim para recebê-la.', 'A simplicidade é o último grau de sofisticação.', 'A mentira nunca vive o suficiente para envelhecer.', 'Aquele que nunca viu a tristeza, nunca reconhecerá a alegria.', 'Não há nada como regressar a um lugar que está igual para descobrir o quanto a gente mudou.', 'Sonhar é verbo: é seguir, é pensar, inspirar e fazer força, insistir, é lutar, transpirar. São mil verbos que vem antes do verbo realizar.', 'Sábio é aquele que conhece os limites da própria ignorância.', 'Um dia, quando olhares para trás, verás que os dias mais belos foram aqueles em que lutaste.', 'Maravilhas nunca faltaram ao mundo; o que sempre falta é a capacidade de senti-las e admirá-las.', 'Qualquer pessoa de sucesso sabe que é uma peça importante, mas sabe que não conseguirá nada sozinho.', ' vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.'],

    author: ['Arthur Ashe', 'Roberto Shinyashiki', 'Frank Tibolt', 'Confúcio', 'Pablo Picasso', 'Platão', 'Aristóteles', 'Ellen Degeneres', 'Immanuel Kant', 'Lou Holtz', 'Paulo Coelho', 'Charles Swindoll', 'Helen Keller', 'Malala Yousafzai', 'Dalai Lama', 'Thomas Edison', 'Wayne Dyer', 'Ayn Rand', 'Mario Quintana', 'Augusto Cury', 'Charles Chaplin', 'Aldous Huxley', 'Margaret Thatcher', 'Buda', 'Clarice Lispector', 'Albert Einstein', 'Beverly Sills', 'Paulo Coelho', 'Vincent van Gogh', 'Georges Bernanos', 'Cecília Meireles', 'Leonardo da Vinci', 'Sócrates', 'Khalil Gibran', 'Nelson Mandela', 'Bráulio Bessa', 'Sócrates', 'Sigmund Freud', 'Mario Quintana', 'Bernardinho', 'F. Scott Fitzgerald']
}
let tasks = []
const Time = {
    puttingZero(value) {
        if (value < 10) {
            value = '0' + value;
        }
        return value;
    },
    hour() {
        setInterval(function() {
            let NewHour = new Date();
            let hour = NewHour.getHours();
            getData.hour = hour;
            let min = NewHour.getMinutes();
            let sec = NewHour.getSeconds();

            let day = NewHour.getDate();
            let day_sem = NewHour.getDay();
            let month = NewHour.getMonth();
            let year = NewHour.getFullYear();

            let Arrayday = [
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado"
            ]
            let Arraymonth = [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro"
            ]
            document.getElementById('date').innerHTML = `${Arrayday[day_sem]}, dia ${day} de ${Arraymonth[month]} de ${year}`;

            min = Time.puttingZero(min);
            hour = Time.puttingZero(hour);
            sec = Time.puttingZero(sec);
            document.getElementById('hour').innerHTML = `${hour}:${min}:${sec}`;
            getData.mensage(hour);
            document.title = `Hora Atual: ${hour}:${min}:${sec}`;
        }, 1000);
    },
}

const Tasks = {
    add() {
        let ok = true;
        for (const element of tasks) {
            if (document.getElementById('addt').value != element) {
                ok = true;
            } else {
                ok = false
                return ok;
            }
        }
        if ((document.getElementById('addt').value != "") && ok) {
            tasks.push(document.getElementById('addt').value);
            DOM.addTasks(tasks[tasks.indexOf(document.getElementById('addt').value)], tasks.indexOf(document.getElementById('addt').value));
            document.getElementById('addt').value = "";

            tasks.length == 0 ? document.querySelector("#clear").style.display = "none" : document.querySelector("#clear").style.display = "inline"
        }
        ok = true;
    }
}

const Enter = {
    pressEnter(e) {
        if (typeof localStorage.name != "undefined") { getData.updateData() }
        document.addEventListener('keypress', function(e) {
            if (e.key == 'Enter') {
                e.preventDefault();
                Tasks.add();
                if (typeof localStorage.name == 'undefined') {
                    getData.updateData();
                }

            }
        }, false);
    }
}

const getData = {
    name: "",

    updateData() {
        getData.name = localStorage.name;
        document.getElementById('name').style.display = 'none';
        document.getElementById("mensage").style.opacity = "1";
    },
    mensage(hour) {
        if (hour >= 4 && hour < 12) {
            document.getElementById("mensage").innerHTML = `Bom dia, ${getData.name}! qual será o nosso foco hoje?<span> ▷</span>`
        } else if (hour >= 12 && hour < 18) {
            document.getElementById("mensage").innerHTML = `Boa tarde, ${getData.name}! O dia está realmente maravilhoso. <span> ▷</span>`
        } else if (hour >= 18 || hour < 4) {
            document.getElementById("mensage").innerHTML = `Boa noite, ${getData.name}! hoje o dia foi sensacional.<span> ▷</span>`
        }
    }
}

const App = {
    init() {
        Time.hour();
        tasks.forEach(DOM.addTasks);
        Enter.pressEnter();
    },
    reload() {
        App.init();
    }
}

const DOM = {
    taskContainer: document.querySelector("#taskContainer"),

    addTasks(task, index) {
        const div = document.createElement('div');
        div.innerHTML = DOM.innerHTMLTransaction(task, index);
        div.dataset.index = index;

        DOM.taskContainer.appendChild(div);

    },

    innerHTMLTransaction(task, index) {

        const html = `<input name="${task}" id="${task}" type="checkbox">
        <label class="task" id="task${tasks[index]}" for="${task}"><span>${task}<span></label>
        <div onClick = "DOM.remove(${index})"class="x"><p>x</p></div>
        `;
        return html;
    },

    remove(index) {
        tasks.splice(index, 1);
        DOM.clearApp();
        App.reload();
        tasks.length == 0 ? document.querySelector("#clear").style.display = "none" : document.querySelector("#clear").style.display = "inline"
    },

    clearApp() {
        document.querySelector("#taskContainer").innerHTML = "";
    },
    Fullsplice() {
        document.querySelector("#clear").style.opacity = 0;
        document.querySelector("form").style.opacity = 0;
        setTimeout(() => {
            tasks.splice(0);
            document.querySelector("#clear").style.display = "none";
            document.querySelector("#taskContainer").innerHTML = "";
            document.querySelector("#clear").style.opacity = 0.5;
            document.querySelector("form").style.opacity = 0.5;
        }, 300);
    },
    phrase() {
        let i = Math.floor(Math.random() * 42);
        document.getElementById("phrase").innerHTML = `"${motivational.phrase[i]}"`;
        document.getElementById("author").innerHTML = `${motivational.author[i]}.`;
    }
}

App.init();