package org.example;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        // Example of adding two numbers
        int sum = calculator.add(5, 3);
        System.out.println("Sum of 5 and 3 is: " + sum);

        // Example of subtracting two numbers
        int difference = calculator.subtract(5, 3);
        System.out.println("Difference of 5 and 3 is: " + difference);
    }
}