import { useForm } from '@inertiajs/react';

const CreatePetForm = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        species: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setData(name, files ? files[0] : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/pets', {
            onSuccess: () => {
                // Optionally, redirect to another page or show a success message
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <div className="text-red-500">{errors.name}</div>
                )}
            </div>
            <div>
                <label>Species:</label>
                <input
                    type="text"
                    name="species"
                    value={data.species}
                    onChange={handleChange}
                />
                {errors.species && (
                    <div className="text-red-500">{errors.species}</div>
                )}
            </div>
            <div>
                <label>Image:</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                />
                {errors.image && (
                    <div className="text-red-500">{errors.image}</div>
                )}
            </div>
            <button type="submit" disabled={processing}>
                {processing ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default CreatePetForm;

