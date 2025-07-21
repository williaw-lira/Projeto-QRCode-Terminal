
const promptQRCode =[
    {
        name: "link",
        description: ("digite o link para gerar o QR CODE")
    },
    {
        name: "type",
        description: ("escolha entre tipo(1- Norma ou (2- Terminal))"),
        pattern: /^[1-2]+$/,
        massage: ("escolha apenas entre 1 e 2"),
        required: true
    }
];

export default promptQRCode