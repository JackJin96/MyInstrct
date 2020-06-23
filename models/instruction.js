class Instruction {
  constructor(id, categoryIds, title, description) {
    (this.id = id),
      (this.categoryIds = categoryIds),
      (this.title = title),
      (this.description = description);
  }
}

export default Instruction;
