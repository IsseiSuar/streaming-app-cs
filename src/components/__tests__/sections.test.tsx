import { render } from '@testing-library/react-native';
import { Sections } from '../sections/sections.component';
import { MoviesData } from '../../mock';

describe("Sections test component", () => {
    it('if index is 0 it would be render <Header/>', () => {
        const { getByTestId, queryByTestId } = render(<Sections index={0} item={MoviesData.containers[0]}/>);

        expect(getByTestId('header-component')).toBeTruthy();
        expect(queryByTestId('carusel-component')).toBeNull();
    });

    it('renderiza <Carusel /> cuando index es distinto de 0', () => {
        const { getByTestId, queryByTestId } = render(<Sections index={1} item={MoviesData.containers[1]} />);
    
        expect(getByTestId('carusel-component')).toBeTruthy();
        expect(queryByTestId('header-component')).toBeNull();
      });
})