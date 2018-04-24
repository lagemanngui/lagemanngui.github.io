var vue = new Vue({

    el: ".main",
    data: {
        categories: ["Web", "Software", "Jogos"],
        projects: []
    },
    methods: {
        getTagClass: function (tag) {
            return tag;
        },
        loadProjects: function () {
            this.projects.push({
                    title: "Amanfredi Advogados",
                    link: "http://amanfredi.adv.br/",
                    desc: "Recorte e implementação de design criado no Photoshop. Utiliza a API do Google Maps para web.",
                    category: "Web",
                    pic: "http://amanfredi.adv.br/css/assets/capa.jpg",
                    tags: [ "PHP", "front-end"],
                    year: 2018
                }, {
                    title: "Marklab - Marketing & Branding",
                    link: "http://marklab.com.br/",
                    desc: "Implementação de um design criado pela agência de marketing Marklab com formulário de contato em PHP.",
                    category: "Web",
                    pic: "http://www.marklab.com.br/css/assets/capa.jpg",
                    tags: [ "PHP", "front-end", "hospedagem"],
                    year: 2018

                }, {
                    title: "Bonsai do Campo",
                    link: "http://www.bonsaidocampo.com.br/loja/",
                    desc: "Instalação e customização de tema para Joomla com e-commerce VirtueMart 2. Atualização das bibliotecas.",
                    category: "Web",
                    pic: "https://i.imgur.com/lJuTRRk.jpg",
                    tags: ["PHP", "front-end", "joomla"],
                    year: 2018

                },
                 {
                    title: "Áudio de Culutra",
                    link: "https://play.google.com/store/apps/details?id=com.pixeltroop.audiodecultura",
                    desc: "Soundboard do programa online Choque de Cultura, com frases clássicas. Mais de 600 downloads.",
                    category: "Web",
                    pic: "https://cdn-images-1.medium.com/max/2000/1*iNieUrcsuUTTvmr2BJR_bg.jpeg",
                    tags: ["Android", "UX/UI", "Godot 3"],
                    year: 2018

                } ,
                {
                    title: "Meu Novo Estilo de Vida",
                    link: "http://www.meunovoestilodevida.com.br/",
                    desc: "Adaptação de tema com plugin Essential Real State. Customização de formulários imobiliários.",
                    category: "Web",
                    pic: "https://i.imgur.com/utIhLd4.jpg",
                    tags: [ "PHP", "front-end", "Wordpress"],
                    year: 2017

                }, {
                    title: "Almeida & Lacerda - Escritório de Advocacia",
                    link: "http://almeidaelacerda.com",
                    desc: "Criação e implementação do design baseado no manual de identidade da marca. Hospedagem e manutenção.",
                    category: "Web",
                    pic: "http://www.almeidaelacerda.com/img/capa.jpg",
                    tags: ["PHP", "front-end", "hospedagem", "back-end"],
                    year: 2017

                }, {
                    title: "Criador de Modelo de Negócios Básico",
                    link: "https://lagemanngui.github.io/bmodel/",
                    desc: "Pequena aplicação experimental para criar Modelos de Negócio rapidamente",
                    category: "Web",
                    pic: "https://i.imgur.com/Ivg6LdD.jpg",
                    tags: ["jQuery", "front-end", "design"],
                    year: 2017

                },
                {
                    title: "Formulário Institucional de Autoavaliação de Cursos",
                    link: "",
                    desc: "Sistema com vários módulos complexos utilizado internamente pela UFPel para avaliação dos cursos em vários aspectos.",
                    category: "Web",
                    pic: "https://www.innovecs.com/wp-content/uploads/2017/11/photo-15088.jpg",
                    tags: ["PHP", "MySQL", "back-end", "CodeIgniter"],
                    year: 2017

                },
                {
                    title: "Revista Grandeza Empresarial",
                    link: "http://revistagrandeza.com.br/",
                    desc: "Design e implementação de site com formulário de contato simples para a revista Grandeza.",
                    category: "Web",
                    pic: "https://i.imgur.com/jVBJ7Gl.jpg",
                    tags: ["design", "front-end"],
                    year: 2017

                },
                {
                    title: "WebSo Soundtracks",
                    link: "https://github.com/lagemanngui/webso-soundtrack-gui",
                    desc: "Aplicação usando web semântica e Sparql para encontrar trilhas sonoras de filmes.",
                    category: "Web",
                    pic: "https://www.innovecs.com/wp-content/uploads/2017/11/photo-15088.jpg",
                    tags: ["PHP", "jQuery", "front-end", "back-end"],
                    year: 2016

                }, {
                    title: "Portal do Egresso UFPel",
                    link: "https://wp.ufpel.edu.br/egresso",
                    desc: "Customização do blog e criação de formulários avançados para Wordpress.",
                    category: "Web",
                    pic: "https://i.imgur.com/zSBIKfz.jpg",
                    tags: ["PHP", "Wordpress", "design", "front-end"],
                    year: 2016

                }, {
                    title: "Museo",
                    link: "https://github.com/VictorCovalski/museo",
                    desc: "Sistema desktop e web para gerenciamento de museus com sincronização online/offline.",
                    category: "Web",
                    pic: "https://www.innovecs.com/wp-content/uploads/2017/11/photo-15088.jpg",
                    tags: ["Java", "Swing UI", "MySQL", "back-end"],
                    year: 2017

                }

            );
        }
    }


});

vue.loadProjects();