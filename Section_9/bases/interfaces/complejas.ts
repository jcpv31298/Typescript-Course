(() => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Carlos',
        age: 23,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Jose',
        age: 24,
        address: {
            id: 120,
            zip: 'ABC 123',
            city: 'Mazatlan'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

})()