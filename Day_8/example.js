function laptop(brand, cpu, gpu, ram, price, color){
    this.brand = brand;
    this.cpu = cpu;
    this.gpu = gpu;
    this.ram = ram;
    this.price = price;
    this.color = color;
}

const newLappy = new laptop('Asus', 'Ryzen 5', 'GTX 1650', 16, 54000, 'black');

console.log(newLappy);