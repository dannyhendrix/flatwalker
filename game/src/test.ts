function greetUser(name: string): void {
    console.log(`Hello2, ${name}!`);
}

// Make the function accessible globally
(window as any).greetUser = greetUser;