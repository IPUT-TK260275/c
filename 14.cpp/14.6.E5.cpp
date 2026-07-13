#include <iostream>

int main() {
    int absences;
    int late_arrivals;
    std::cin >> absences >> late_arrivals;

    std::cout << std::boolalpha << "---\n" << (absences + late_arrivals / 3 < 7) << '\n';
}
