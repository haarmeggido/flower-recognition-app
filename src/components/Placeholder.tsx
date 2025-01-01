function Placeholder({ title }: { title: string }) {
  return (
    <div className="container mt-5">
      <h1 className="text-center">{title} Page</h1>
      <p className="text-center">Content for the {title.toLowerCase()} page will go here.</p>
    </div>
  );
}

export default Placeholder;
