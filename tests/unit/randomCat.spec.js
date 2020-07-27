import RandomCat from '../../src/components/RandomCat'
import { shallowMount } from '@vue/test-utils'

describe("Random Cat", () => {
    let wrapper;

    beforeEach(()=> {
        wrapper = shallowMount(RandomCat);
        it('Have', () => {
            expect(wrapper.exists()).toBeFalsy();
        })
        
    })
})