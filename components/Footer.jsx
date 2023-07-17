export const Footer = (foot) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {foot.year} {foot.fullname} {foot.studentId}
      </p>
    </div>
  );
};
