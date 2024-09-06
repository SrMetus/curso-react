import { getAllByAltText, getByTestId, render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';


describe('Pruebas en <FirstApp />', () => { 
    test('debe hacer match con el snapshot', () => {
        const title = 'Hola, soy Vegeta';
        const {container} = render(<FirstApp title={title} />);

        expect(container).toMatchSnapshot();

    });
    test('debe mostrar el titulo en un h1', () => {
        const title = 'Hola, soy Vegeta';
        const {container, getByText, getByTestId} = render(<FirstApp title={title} />);
        
        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toBe(title);

    });
    test('debe mostrar un subtitulo enviado por props', () => {
        const title = 'Hola, soy Vegeta';
        const subTitle = 'soy un subtitulo'
        const {getByText, getAllByText} = render(
        <FirstApp 
            title={title}
            subTitle={subTitle}
        />);
        // expect(getByText(subTitle)).toBeTruthy();
        expect(getAllByText(subTitle).length).toBe(2);
    })

 });