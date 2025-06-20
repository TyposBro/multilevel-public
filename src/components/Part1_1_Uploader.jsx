// Now, just define the props for each uploader
export const Part1_1_Uploader = () => (
  <Uploader
    title="Upload Part 1.1 Question"
    apiEndpoint="/api/admin/content/part1.1"
    formFields={[
      { name: "questionText", label: "Question Text", type: "text" },
      { name: "audio", label: "Question Audio", type: "file", accept: "audio/*" },
    ]}
  />
);

export default Part1_1_Uploader;
