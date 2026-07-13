#include <iostream>
#include <string>

int main() {
    std::string text;
    std::getline(std::cin, text);

    std::cout << "---\n" << text[text.size() / 2] << '\n';
}
