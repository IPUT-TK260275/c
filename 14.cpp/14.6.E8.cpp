#include <iostream>
#include <string>

int main() {
    std::string address;
    std::getline(std::cin, address);

    const std::size_t at = address.find('@');
    const bool has_one_at = at != std::string::npos && at != 0 && address.find('@', at + 1) == std::string::npos;
    const bool has_dot_after_at = has_one_at && address.find('.', at + 1) != std::string::npos;

    std::cout << std::boolalpha << "---\n" << has_dot_after_at << '\n';
}
