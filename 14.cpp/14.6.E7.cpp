#include <iostream>
#include <string>

int main() {
    std::string postal_code;
    std::getline(std::cin, postal_code);

    std::cout << "---\n" << postal_code.substr(0, 3) << '-' << postal_code.substr(3) << '\n';
}
