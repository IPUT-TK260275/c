#include <iostream>

int main() {
    int limit;
    std::cin >> limit;

    std::cout << "---\n";
    long long factorial = 1;
    for (int value = 1; value <= limit; ++value) {
        factorial *= value;
        std::cout << factorial << '\n';
    }
}
