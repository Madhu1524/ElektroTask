// import 'dart:convert';
// import 'package:shelf/shelf.dart';
// import 'package:shelf/shelf_io.dart' as io;
// import 'package:mongo_dart/mongo_dart.dart';

// void main() async {
//   // MongoDB connection string
//   var db = Db(
//       'mongodb://Elektroxen:Madhu%4012345@elektrotask-shard-00-00.1s8dp.mongodb.net:27017,elektrotask-shard-00-01.1s8dp.mongodb.net:27017,elektrotask-shard-00-02.1s8dp.mongodb.net:27017/ElektroXen?ssl=true&replicaSet=atlas-8hdce0-shard-0&authSource=admin&retryWrites=true&w=majority');

//   try {
//     await db.open();
//     print('Connected to MongoDB successfully.');
//   } catch (e) {
//     print('Failed to connect to MongoDB: $e');
//     return;
//   }

//   var usersCollection = db.collection('users');

//   final handler = Pipeline()
//       .addMiddleware(logRequests())
//       .addHandler((Request request) async {
//     if (request.url.path.isEmpty) {
//       // Handle root path
//       return Response.ok(
//         'Welcome to the ElektroTask API',
//         headers: {'Content-Type': 'text/plain'},
//       );
//     } else if (request.url.path == 'users') {
//       // Handle /users path
//       var users = await usersCollection.find().toList();
//       return Response.ok(
//         jsonEncode(users),
//         headers: {'Content-Type': 'application/json'},
//       );
//     } else if (request.url.path == 'Picture') {
//       // Handle /Picture path
//       return Response.ok(
//         'This is a placeholder for the Picture endpoint.',
//         headers: {'Content-Type': 'text/plain'},
//       );
//     } else {
//       // Handle other paths
//       return Response.notFound('Page not found');
//     }
//   });

//   final server = await io.serve(handler, 'localhost', 8080);
//   print('Server listening on http://${server.address.host}:${server.port}');
// }
