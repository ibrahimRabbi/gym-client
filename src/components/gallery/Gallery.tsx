import { Gallery } from "react-grid-gallery";





const Gallerys = () => {
    
    
   
    
    
    
    const images = [
        {
            src: "https://i.ibb.co/k2mDvNK/Abs-of-Steel-Home-Ab-Workout-Routines-for-a-Strong-and-Sculpted-Core-Define-your-core-with-targeted.jpg",
            width: 340,
            height: 324,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://i.ibb.co/FVtW81H/82f15387-b6e4-4a31-8b25-029ad7495468.jpg",
            width: 340,
            height: 324,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: " https://i.ibb.co/pR6ntvp/Chris-Hemsworth-s-PT-reveals-workout-that-got-him-in-shape-for-Thor.jpg",
            width: 320,
            height: 344,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://i.ibb.co/NrswmYH/Save-Time-in-the-Gym-With-This-Intense-30-Minute-Full-Body-Strengthening-Workout.jpg",
            width: 320,
            height: 324,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://i.ibb.co/12FWtt4/slide1.webp",
            width: 520,
            height: 324,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://i.ibb.co/0BYXx4z/5-Surprising-Ways-Exercise-Affects-Your-Skin.jpg",
            width: 320,
            height: 304,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
            width: 350,
            height: 312,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
            src: "https://i.ibb.co/C12WhvS/Men-Hobbies-workout-aesthetics.jpg",
            width: 360,
            height: 380,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
        },

        {
            src: "https://i.ibb.co/0BYXx4z/5-Surprising-Ways-Exercise-Affects-Your-Skin.jpg",
            width: 320,
            height: 304,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://i.ibb.co/C12WhvS/Men-Hobbies-workout-aesthetics.jpg",
            width: 340,
            height: 380,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
        },

        {
            src: "https://i.ibb.co/DpG0jFJ/The-Brilliant-Vision-of-Patricia-Walsh.jpg",
            width: 360,
            height: 324,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
            src: "https://i.ibb.co/Zm2Z1Cy/image1.jpgg",
            width: 480,
            height: 324,
            tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" },
            ],
            caption: "After Rain (Jeshu John - designerspics.com)",
        },
    ];





    return (
        <section className="w-[90%] mx-auto my-20">
            <Gallery images={images} />
        </section>
        
    );
};

export default Gallerys;