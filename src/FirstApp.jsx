// const newMessage = [1,2,3,4,5,6,7,8,9]
// const newMessage2 = {
//     message: 'Hola mundos',
//     title: 'Sebastian',
// };

// const date = new Date();
// const [month, day, year, hour, minute, second] = [
//     date.getMonth() + 1, 
//     date.getDate(),
//     date.getFullYear(),
//     date.getHours(),
//     date.getMinutes(),
//     date.getSeconds()
// ];

export const FirstApp = ({title, subtitle}) => {

    return (
        <>
            <h1>{title}</h1>
            {/* <h2>{`${day}-${month}-${year} at ${hour}:${minute}:${second}`}</h2>
            <h1>{newMessage}</h1>
            <code>{JSON.stringify(newMessage2)}</code> 
            <p>Soy un subtitulo</p>*/}
            <p>{subtitle * 2}</p>
        </>
    )
};