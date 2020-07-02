class Instruction {
  constructor(id, categoryIds, title, description, imageUris) {
    (this.id = id),
      (this.categoryIds = categoryIds),
      (this.title = title),
      (this.description = description),
      (this.imageUris = imageUris);
  }
}

export default Instruction;
