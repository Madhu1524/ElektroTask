import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  final String baseUrl =
      'https://appsail-50024428090.development.catalystappsail.in/api';

  Future<List<Map<String, dynamic>>> fetchTasks() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/getTask'));
      print(response.body);
      if (response.statusCode == 200) {
        return List<Map<String, dynamic>>.from(json.decode(response.body));
      } else {
        throw Exception('Failed to load tasks');
      }
    } catch (e) {
      print(e.toString());
      throw Exception('Failed to load tasks $e');
    }
  }
}
