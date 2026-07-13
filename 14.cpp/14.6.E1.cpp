#include <iostream>
#include <string>

int main() {
    std::string first_name;
    std::string second_name;
    int first_price;
    int first_count;
    int second_price;
    int second_count;

    std::getline(std::cin, first_name);
    std::cin >> first_price >> first_count;
    std::cin.ignore();
    std::getline(std::cin, second_name);
    std::cin >> second_price >> second_count;

    const int first_total = first_price * first_count;
    const int second_total = second_price * second_count;
    std::cout << "---\n"
              << first_name << ": " << first_total << " yen\n"
              << second_name << ": " << second_total << " yen\n"
              << "===\n"
              << "Total: " << first_total + second_total << " yen\n";
}
